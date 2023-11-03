import defaults from './defaults.svg';
import france from './france.svg';
import japan from './japan.svg';
import qatar from './qatar.svg';
import rabat from './rabat.svg';
import tunis from './tunis.svg';


export function getCityIllustrationPath(cityName) {
    let cityIllustrationPath;
    const cityLowerCase = cityName.toLowerCase();

    switch (cityLowerCase) {
        case 'paris':
            cityIllustrationPath = france;
            break;
        case 'doha':
            cityIllustrationPath = qatar;
            break;
        case 'rabat':
            cityIllustrationPath = rabat;
            break;
        case 'tunis':
            cityIllustrationPath = tunis;
            break;
        case 'tokyo':
            cityIllustrationPath = japan;
            break;
        default:
            cityIllustrationPath = defaults;
    }
    return cityIllustrationPath
}