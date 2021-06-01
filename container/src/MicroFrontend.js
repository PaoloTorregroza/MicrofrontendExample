import React, { useEffect } from 'react';

function MicroFrontend({ name, host }) {
    // Use effect is a hook for side effects and direct DOM manipulation
    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFronted = () => {
            window[`render${name}`](`${name}-container`);
        }

        if (document.getElementById(scriptId)) {
            renderMicroFronted();
            return;
        }

        // Fetch assets-manifes.json from builded version of microfrontend
        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                // Creates script object whit the microapp and add it to the document
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFronted();
                }
                document.head.appendChild(script);
            });
        
        return () => {
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`)
        }
    });

    return <main id={`${name}-container`} />
}

MicroFrontend.defaultProps = {
    document,
    window
};

export default MicroFrontend;