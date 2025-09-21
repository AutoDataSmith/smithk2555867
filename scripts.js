    function toggleMenu() {           
        const divToShow = document.getElementById('nav-overlay'); 
        if (divToShow.style.display === 'none'){
            window.scrollTo(0, 0);
            divToShow.style.display = 'block';

        } 
        else{ 
            divToShow.style.display = 'none';
        }            
    }