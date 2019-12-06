import * as React from 'react';
import Analytics from '../utils/Analytics';

export default class Layout extends React.Component<{}> {
    componentDidMount(): void {
        Analytics.init();
        Analytics.view();
    }

    render(): React.ReactElement {
        return <div>{this.props.children}</div>;
    }
}
