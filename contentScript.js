// For normal inputs and textareas
document.body.addEventListener('keyup', function(event) {
    let text = document.activeElement.value;
    if (text.includes(' i ') || text.startsWith('i ') || text.includes('. i ') || text.includes('? i ') || text.includes('! i ') || text.includes("i'm") || text.includes("i'd") || text.includes("i'll") || text.includes("i've")) {
        document.activeElement.value = text.replace(/ i /g, ' I ').replace(/^i /, 'I ').replace(/\. i /g, '. I ').replace(/\? i /g, '? I ').replace(/\! i /g, '! I ').replace(/i'm/g, "I'm").replace(/i'd/g, "I'd").replace(/i'll/g, "I'll").replace(/i've/g, "I've");
    }
});
