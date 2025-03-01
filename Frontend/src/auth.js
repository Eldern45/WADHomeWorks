export default {
    user: { authenticated: false },
    authenticated: async function() {
        console.log("AAA");
        await fetch("http://localhost:3000/auth/authenticate", {
                credentials: 'include',
            })
            .then((response) => response.json())
            .then((data) => {
                this.user.authenticated = data.authenticated;
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
                console.log("error logout");
            });
        return this.user.authenticated;
    }

}