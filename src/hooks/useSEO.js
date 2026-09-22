import { useEffect } from 'react';

export function useSEO({ title, description, schema }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      // Update og:title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', title);
      
      // Update twitter:title
      let twTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twTitle) {
        twTitle = document.createElement('meta');
        twTitle.setAttribute('name', 'twitter:title');
        document.head.appendChild(twTitle);
      }
      twTitle.setAttribute('content', title);
    }

    if (description) {
      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Update og:description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);
      
      // Update twitter:description
      let twDesc = document.querySelector('meta[name="twitter:description"]');
      if (!twDesc) {
        twDesc = document.createElement('meta');
        twDesc.setAttribute('name', 'twitter:description');
        document.head.appendChild(twDesc);
      }
      twDesc.setAttribute('content', description);
    }

    // Add canonical URL based on current pathname
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://dasatech.in${window.location.pathname}`);

    // Manage JSON-LD Schema
    let schemaScript = document.getElementById('schema-jsonld');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-jsonld';
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    // Cleanup isn't strictly necessary for document.title but good practice for schema
    return () => {
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, schema]);
}
