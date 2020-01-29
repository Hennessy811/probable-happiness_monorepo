import Todos from "./scenes/Todos";
import Welcome from "./scenes/Welcome";
import Auth from "./scenes/Auth";
import Transport from "./scenes/Transport";
import Parkings from "./scenes/Parkings";
import History from "./scenes/History";
import Fines from "./scenes/Fines";
import Checks from "./scenes/Checks";
import {Parkings as ParkingsIcon, Check, Abonement, History as HistoryIcon} from './shared/Icons/NavSvg';

export default [
    {
        id: 1,
        path: "/",
        children: Welcome,
        useWith: ['header']
    },
    {
        id: 2,
        path: "/todos",
        title: "Todo`s List",
        children: Todos,
        useWith: ['sidebar']
    },
    {
        id: 3,
        path: "/auth",
        title: "Auth",
        children: Auth,
        useWith: []
    },
    {
        id: 4,
        path: "/transport",
        title: "Транспорт",
        children: Transport,
        useWith: ['header']
    },
    {
        id: 5,
        path: "/parkings",
        title: "Парковки",
        children: Parkings,
        useWith: ['sidebar', 'header'],
        icon: 'parkings',
    },
    {
        id: 6,
        path: "/history",
        title: "История операций",
        children: History,
        useWith: ['sidebar', 'header'],
        icon: 'history',
    },
    {
        id: 7,
        path: "/fines",
        title: "Абонементы",
        children: Fines,
        useWith: ['sidebar', 'header'],
        icon: 'abonement',
    },
    {
        id: 8,
        path: "/checks",
        title: "Счета",
        children: Checks,
        useWith: ['header', 'sidebar'],
        icon: 'check',
    },
];
