import React, {useEffect, useRef, useState} from 'react';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

export interface TimelineItem {
    id: string;
    title: string;
    org: string;
    period: string;
    location: string;
    bullets: string[];
    summary?: string;
    groups?: { icon: string; title: string; bullets: string[] }[];
}

interface TimelineProps {
    idPrefix: string;
    /** Items in chronological order (oldest first). */
    items: TimelineItem[];
    labels: { current: string; previous: string; next: string };
}

const CURRENT_RE = /present|présent/i;
const startYear = (period: string) => period.match(/\d{4}/)?.[0] ?? '';

function Timeline({idPrefix, items, labels}: TimelineProps) {
    const [selected, setSelected] = useState(items.length - 1);
    const trackRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const firstRender = useRef(true);

    // Keep the selected node centred in the horizontal track (without moving the page vertically).
    useEffect(() => {
        const track = trackRef.current;
        const node = nodeRefs.current[selected];
        if (!track || !node) return;
        const left = node.offsetLeft - track.clientWidth / 2 + node.offsetWidth / 2;
        track.scrollTo({left, behavior: firstRender.current ? 'auto' : 'smooth'});
        firstRender.current = false;
    }, [selected]);

    const select = (index: number, focus = false) => {
        const next = Math.max(0, Math.min(items.length - 1, index));
        setSelected(next);
        if (focus) nodeRefs.current[next]?.focus({preventScroll: true});
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); select(selected + 1, true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); select(selected - 1, true); }
        if (e.key === 'Home') { e.preventDefault(); select(0, true); }
        if (e.key === 'End') { e.preventDefault(); select(items.length - 1, true); }
    };

    const item = items[selected];
    const isCurrent = CURRENT_RE.test(item.period);

    return (
        <div className="tl">
            <div className="tl-rail">
                <button className="tl-arrow" aria-label={labels.previous}
                        disabled={selected === 0} onClick={() => select(selected - 1)}>
                    <ChevronLeft/>
                </button>

                <div className="tl-track" ref={trackRef}>
                    <div className="tl-list" role="tablist" aria-orientation="horizontal" onKeyDown={onKeyDown}>
                        {items.map((it, i) => (
                            <button
                                key={it.id}
                                ref={el => { nodeRefs.current[i] = el; }}
                                role="tab"
                                id={`${idPrefix}-tab-${i}`}
                                aria-selected={i === selected}
                                aria-controls={`${idPrefix}-panel`}
                                tabIndex={i === selected ? 0 : -1}
                                className={`tl-node${i === selected ? ' is-active' : ''}${CURRENT_RE.test(it.period) ? ' is-current' : ''}`}
                                onClick={() => select(i)}
                            >
                                <span className="tl-year">{startYear(it.period)}</span>
                                <span className="tl-dot" aria-hidden="true"/>
                                <span className="tl-org">{it.org}</span>
                                <span className="tl-role">{it.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <button className="tl-arrow" aria-label={labels.next}
                        disabled={selected === items.length - 1} onClick={() => select(selected + 1)}>
                    <ChevronRight/>
                </button>
            </div>

            <div className="tl-panel" role="tabpanel" id={`${idPrefix}-panel`}
                 aria-labelledby={`${idPrefix}-tab-${selected}`} key={item.id}>
                <div className="tl-panel-head">
                    <div>
                        <h4>{item.title}</h4>
                        <span className="tl-panel-org">{item.org}</span>
                    </div>
                    <div className="tl-panel-meta">
                        {isCurrent && <span className="tl-badge">{labels.current}</span>}
                        <span>{item.period}</span>
                        <span>{item.location}</span>
                    </div>
                </div>
                {item.summary && <p className="tl-summary">{item.summary}</p>}
                {item.bullets.length > 0 && (
                    <ul>
                        {item.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                )}
                {item.groups && (
                    <div className="tl-groups">
                        {item.groups.map(g => (
                            <div className="tl-group" key={g.title}>
                                <h5><span aria-hidden="true">{g.icon}</span>{g.title}</h5>
                                <ul>
                                    {g.bullets.map(b => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Timeline;
