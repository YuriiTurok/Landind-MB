const meetItems = document.querySelectorAll('.meet__item');
const meetDescriptions = document.querySelectorAll('.meet__description');


meetItems.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentItm = item;
        let descriptionId = currentItm.getAttribute("data-description");
        let currentDescription = document.querySelector(descriptionId);

        if( ! currentItm.classList.contains('active') ) {
            meetItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            meetDescriptions.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentItm.classList.add('active');
            currentDescription.classList.add('active');
        }
    });
});