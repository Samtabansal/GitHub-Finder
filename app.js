document.getElementById('input-user').addEventListener('keyup', (e) => {
    const git = new Github();
    const ui = new UI();

    if(e.target.value != ''){
        git.getUser(e.target.value)
            .then(data => {
                if(data.profileDetail.message !== 'Not Found'){
                    ui.showProfile(data.profileDetail);
                }
                else{
                    ui.showAlert('User Not Found');
                }
            })
    }else{
        ui.clearDiv();
    }
    
}); 
