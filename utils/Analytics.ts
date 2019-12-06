import ReactGA from 'react-ga';

export default class Analytics {
    static init(): void {
        ReactGA.initialize('UA-154177218-1');
    }
    static view(): void {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }
    static event(category = '', action = ''): void {
        if (category && action) ReactGA.event({ category, action });
    }
    static exception(description = '', fatal = false): void {
        if (description) ReactGA.exception({ description, fatal });
    }
}
