export const CakeProductSection = {
    id: 'cakes',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    title: 'Pasteles!', 
    headline: 'Delightful, Rich, Original',
    description: 'Get your Azteca Cake or Azteca Extra in-store.',
    buttonLabel: 'See Menu',
    linkRoute: '/menu',
    imgStart: true,
    img: require('../../images/PhotoshopCake2.png'),
    alt: 'Store',
    dark: false,
    primary: false,
    darkText: true
}

export const BreadProductSection = {
    id: 'pastries',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    title: 'Pan Dulce', 
    headline: 'Sweet, Delicious, Authentic Taste',
    description: 'Made fresh daily.',
    buttonLabel: 'Take a peek',
    linkRoute: '/menu',
    imgStart: true,
    img: require('../../images/PhotoshopPan.png'),
    alt: 'Store',
    dark: true,
    primary: true,
    darkText: false
}
