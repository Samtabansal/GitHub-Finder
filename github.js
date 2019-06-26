class Github{
    constructor(){
        this.clientId = 'dd321d6dd67c8f11c355';
        this.clientSecret = '4fdb936ccff231c9350d6a1d0ed22f481a296434';
    }

    async getUser(user){
        const profileUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profileDetail = await profileUser.json();
        //console.log(profileDetail);

        return{
            profileDetail
        }
    }
}