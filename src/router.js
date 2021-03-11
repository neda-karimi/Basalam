import HomePage from '../src/HomePage.vue';
import SecondPage from '../src/SecondPage.vue';
import ThirdPage from '../src/ThirdPage.vue';
export const routes = [
    { path: '', component: HomePage},
    { path: '/SecondPage', component: SecondPage },
    { path: '/ThirdPage', component: ThirdPage }
]