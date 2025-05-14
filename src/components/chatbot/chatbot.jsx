import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/68244c08e6bf69190cdb2345/1ir6si0q5';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  }, []);

  return null; // No UI needed
};

export default Chatbot;
