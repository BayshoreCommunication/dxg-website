"use client"
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

interface LazyDescriptionProps {
  description: string;
}

const LazyDescription: React.FC<LazyDescriptionProps> = ({ description }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(description, 'text/html');
  const allElements = Array.from(doc.body.childNodes);

  const increment = 1;
  const [loadedElements, setLoadedElements] = useState<Node[]>([]);
  const [loadIndex, setLoadIndex] = useState(0);

  useEffect(() => {
    setLoadedElements(allElements.slice(0, increment));
    setLoadIndex(increment);
  }, [description]);

  useEffect(() => {
    const loadNextElements = () => {
      if (loadIndex < allElements.length) {
        const nextElements = allElements.slice(loadIndex, loadIndex + increment);
        setLoadedElements(loaded => [...loaded, ...nextElements]);
        setLoadIndex(loadIndex + increment);
      }
    };

    const timeoutId = setTimeout(() => {
      loadNextElements();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [loadIndex, loadedElements, allElements]);

  return (
    <div className='text-justify text-sm'>
      {loadedElements.map((element, index) => {
        if (element.nodeType === Node.ELEMENT_NODE) {
          const htmlElement = element as Element;
          return (
            <div key={index} className="fadeInAnimation">
              {parse(htmlElement.outerHTML)}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default LazyDescription;
