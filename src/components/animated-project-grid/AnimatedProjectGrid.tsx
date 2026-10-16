import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react';
import './animated-project-grid.css';

export interface ProjectGridItem {
  /** Unique within this grid. */
  id: string;
  title: string;
  category: string;
  image: { src: string; alt: string; position?: string };
  description?: string;
  /** React content, never interpreted as raw HTML. */
  content: ReactNode;
  meta?: string;
  theme?: 'light' | 'dark';
}

export interface AnimatedProjectGridProps {
  items: readonly ProjectGridItem[];
  label?: string;
  className?: string;
  style?: CSSProperties;
  /** Called once per open or close; null means closed. */
  onActiveChange?: (id: string | null) => void;
  emptyContent?: ReactNode;
}

/** A responsive editorial grid with a shared-element case-study dialog. */
export function AnimatedProjectGrid({ items, label = 'Projects', className = '', style, onActiveChange, emptyContent = 'No projects yet.' }: AnimatedProjectGridProps) {
  const uid = useId();
  const [active, setActive] = useState<ProjectGridItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLButtonElement | null>(null);
  const previousOverflow = useRef<string | null>(null);
  const activeRef = useRef<ProjectGridItem | null>(null);
  const reduced = useReducedMotion();
  const transition = reduced ? { duration: 0 } : { type: 'spring' as const, duration: 0.5, bounce: 0.12 };

  function unlockScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  function open(item: ProjectGridItem, button: HTMLButtonElement) {
    origin.current = button;
    activeRef.current = item;
    setActive(item);
    onActiveChange?.(item.id);
  }

  function close() {
    if (!activeRef.current) return;
    activeRef.current = null;
    setActive(null);
    onActiveChange?.(null);
  }

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Tab') return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )).filter(element => element.tabIndex >= 0 && element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === event.currentTarget)) {
      event.preventDefault(); first.focus();
    }
  }

  function finishClose() {
    if (activeRef.current) return;
    dialog.current?.close();
    unlockScroll();
    origin.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (active && dialog.current && !dialog.current.open) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.current.showModal();
      dialog.current.querySelector<HTMLButtonElement>('.epg__close')?.focus({ preventScroll: true });
    }
  }, [active]);

  useEffect(() => () => { unlockScroll(); }, []);

  return (
    <LayoutGroup id={uid}>
      <section className={`epg ${className}`} style={style} aria-label={label}>
        {items.length ? <ul className="epg__grid">
          {items.map((item) => <li className="epg__cell" key={item.id}>
            <button className="epg__trigger" type="button" aria-haspopup="dialog" aria-label={`View ${item.title}`} onClick={(event) => open(item, event.currentTarget)}>
              {active?.id === item.id ? <div className="epg__placeholder" /> :
                <motion.div layoutId={`card-${item.id}`} transition={transition} className={`epg__card epg__card--${item.theme ?? 'light'}`}>
                  <motion.img layoutId={`image-${item.id}`} transition={transition} className="epg__image" src={item.image.src} alt={item.image.alt} style={{ objectPosition: item.image.position }} loading="lazy" />
                  <div className="epg__card-copy"><span className="epg__eyebrow">{item.category}</span><h3>{item.title}</h3>{item.meta && <span className="epg__meta">{item.meta}</span>}</div>
                  <span className="epg__open-label" aria-hidden="true">View project <span>↗</span></span>
                </motion.div>}
            </button>
          </li>)}
        </ul> : <div className="epg__empty">{emptyContent}</div>}
        <motion.dialog layoutRoot layoutScroll ref={dialog} className="epg__dialog" onKeyDown={trapFocus} aria-labelledby={`${uid}-title`} onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
          <AnimatePresence onExitComplete={finishClose}>
            {active && <motion.div key="overlay" className="epg__backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.22 }} onClick={close} />}
            {active && <motion.article key={active.id} layoutId={`card-${active.id}`} transition={transition} className={`epg__detail epg__card--${active.theme ?? 'light'}`}>
              <div className="epg__hero">
                <motion.img layoutId={`image-${active.id}`} transition={transition} className="epg__image" src={active.image.src} alt={active.image.alt} style={{ objectPosition: active.image.position }} />
                <div className="epg__card-copy"><span className="epg__eyebrow">{active.category}</span><h2 id={`${uid}-title`}>{active.title}</h2>{active.meta && <span className="epg__meta">{active.meta}</span>}</div>
              </div>
              <motion.div className="epg__body" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
                {active.description && <p className="epg__intro">{active.description}</p>}
                {active.content}
                <button type="button" className="epg__back" onClick={close}>Back to projects</button>
              </motion.div>
              <button type="button" className="epg__close" aria-label="Close project" onClick={close}><span aria-hidden="true">×</span></button>
            </motion.article>}
          </AnimatePresence>
        </motion.dialog>
      </section>
    </LayoutGroup>
  );
}
