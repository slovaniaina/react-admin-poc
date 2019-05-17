import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

class Dashboard extends React.Component{
    render() {
		return (
			<div>
				<Card>
                    <CardHeader title="Welcome to the administration" />
                    <CardContent> Lorem ipsum sic dolor amet...</CardContent>
                </Card>
			</div>
		)
	}
}

/*export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent> Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);*/

export default Dashboard;