// creating a module

const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you dont know.",
    "Whenever possible, keep it simple."
]

/* The global varibale exports make the function visible
outside the module
*/
exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}