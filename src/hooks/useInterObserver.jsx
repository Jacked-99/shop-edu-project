import { useState, useEffect, useRef } from "react";

const useInterObserver = (options) => {
  const observerRef = useRef(null);
  const [isVisivle, setIsVisible] = useState(false);
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [options]);
  return [observerRef, isVisivle];
};
export default useInterObserver;
