/**
 * used to lazy load scripts dynamically
 * @param { string } src the url for the script to load
 * @param { ?boolean } defer optional defer value, defaults to true
 */
export const lazyLoader = function (src:string, defer: boolean = true) {
    return new Promise(resolve => {
        const footer = document.getElementsByTagName('footer')[0];
        const newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = src;
        newScript.onload = resolve;
        if (defer) newScript.setAttribute('defer', 'defer');
        footer.append(newScript);
    });
}