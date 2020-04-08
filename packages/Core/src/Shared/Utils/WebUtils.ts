/**
 * Helper to make creating templates cleaner to use
 * TODO: improve to allow more modular css and possibly placeholders
 */
export const createTemplate = (content, style = '') => {
    const template = document.createElement('template');
    template.innerHTML = `${style}${content}`;

    return template;
}