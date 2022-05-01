const dropdown = document.querySelector('.fam-site__down');
$(()=>{
    $('.fam-site__drop').click((e)=>{
        e.preventDefault();
        $(dropdown).toggle();
    })
});
