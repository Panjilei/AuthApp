import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component{ 
    render() {
        return (
            <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="muhammadpanjish@gmail.com"
                />
            </CardSection>

            <CardSection>
                <Input
                    label="Password"
                    placeholder="password"
                />
            </CardSection>

            <CardSection>
                <Button>
                    Log In
                </Button>
            </CardSection>
            </Card>
        );
    }
}

export default LoginForm;