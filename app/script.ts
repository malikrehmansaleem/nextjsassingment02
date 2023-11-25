
export function manipulateElementById(id: string, action: 'show' | 'hide'): void {
    const element = document.getElementById(id);
    if (element) {
        if (action === 'show') {
            element.style.right = '0';
        } else if (action === 'hide') {
            element.style.right = '-200px';
        }
    }
}
