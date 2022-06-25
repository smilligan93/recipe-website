import React from 'react';
import './App.css';
import { Box, Grommet, Tab, Tabs } from 'grommet';
import Recipes from './data/Recipes';
import { RecipeView } from './components/RecipeView';

function App() {
    return (
        <Grommet>
            <Box fill='horizontal' pad='large'>
                <Tabs>
                    {Recipes.map((recipe) => (
                        <Tab key={recipe.name} title={recipe.name}>
                            <RecipeView recipe={recipe} />
                        </Tab>
                    ))}
                </Tabs>
            </Box>
        </Grommet>
    );
}

export default App;
