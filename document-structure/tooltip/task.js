const tooltipElements = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = text;
    return tooltip;
}

function getTooltipPosition(element, tooltip) {
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const position = element.getAttribute('data-position') || 'bottom';
    
    let top, left;
    
    switch(position) {
        case 'top':
            top = rect.top - tooltipRect.height;
            left = rect.left;
            break;
        case 'left':
            top = rect.top;
            left = rect.left - tooltipRect.width;
            break;
        case 'right':
            top = rect.top;
            left = rect.right;
            break;
        default:
            top = rect.bottom;
            left = rect.left;
    }
    
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (left + tooltipRect.width > window.innerWidth) {
        left = window.innerWidth - tooltipRect.width;
    }
    
    return { top, left };
}

function showTooltip(element) {
    const tooltipText = element.getAttribute('title');
    if (!tooltipText) return;
    
    if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
    
    const tooltip = createTooltip(element, tooltipText);
    document.body.appendChild(tooltip);
    
    const { top, left } = getTooltipPosition(element, tooltip);
    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    
    activeTooltip = tooltip;
}

function hideTooltip() {
    if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
    }
}

tooltipElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        showTooltip(element);
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip')) {
        hideTooltip();
    }
});