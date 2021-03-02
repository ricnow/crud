import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppList from './AppList';
import FormApp from './FormApp';

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab(){
    return (
        <NavigationContainer>
            <Navigator 
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginLeft: 16,
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#c1bccc',
                    activeTintColor: '#32264d',  
                }}>
                    <Screen name="AppList" component={AppList}
                        options={{
                            tabBarLabel: "Compras",
                        }}
                    />
                    <Screen name="FormApp" component={FormApp}
                         options={{
                            tabBarLabel: "Adicionar",
                        }}
                    />

                </Navigator>
        </NavigationContainer>
    )
}

export default AppTab;