export const state = () => ({
    isMob: false,
    isThailand: false
});

export const mutations = {
    setCountry (state, isthai) {
        state.isThailand = isthai;
    },
    setMob (state, ismob) {
        state.isMob = ismob;
    } 
}