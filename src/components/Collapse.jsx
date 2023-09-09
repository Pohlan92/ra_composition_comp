import { useRef, useState } from 'react';
import cn from 'classnames';

export const Collapse = ({
  children,
  collapsedLabel = 'Развернуть',
  expandedLabel = 'Свернуть',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const content = useRef(null);

  const onClickHandler = () => {
    setHeight(isExpanded ? 0 : content.current.scrollHeight);
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn('collapse', {
        collapse_expanded: isExpanded,
        collapse_collapsed: !isExpanded,
      })}
    >
      <div
        className="collapse__content"
        ref={content}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
      <button className="link collapse__btn">
        <span className="link__text" onClick={onClickHandler}>
          {isExpanded ? expandedLabel : collapsedLabel}
        </span>
        <span className="link__icon"> {isExpanded ? '↑' : '↓'}</span>
      </button>
    </div>
  );
};
