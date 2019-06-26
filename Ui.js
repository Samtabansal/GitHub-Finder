class UI{
    constructor() {
        this.output = document.getElementById('output');
        this.alert = document.getElementById('alert');
    }

    showProfile(data) {
        this.output.style.display = 'block';
        this.output.innerHTML = 
        `
            <div id = "content">
                <img src="${data.avatar_url}">
                <p>Followers :  ${data.followers} </p>
                <p>Following : ${data.following}</p>
                <p>Company :  ${data.company} </p>
                <p>Website/Blog : ${data.blog}</p>
                <p>Location :  ${data.location} </p>
                <p>Member Since : ${data.created_at}</p>
                <a href="${data.html_url}" > Check out complete profile </a>
            </div>`;
    }

    showAlert(msg) {
        
        this.alert.innerHTML = msg;
        this.alert.style.display = 'block';
        setTimeout(() => {
            this.alert.style.display = 'none';
        },1000);
    }

    clearDiv() {
        this.alert.style.display = 'none';
        this.output.innerHTML = "";
    }
}