import React from 'react';
import './App.css';
import { Box, Grommet, Tab, Tabs } from 'grommet';
import Recipes from './data/Recipes';
import { RecipeView } from './components/RecipeView';
import { RecipeSubmissionPage } from './pages/RecipeSubmissionPage';

function App() {
    return (
        <Grommet>
            <Box fill='horizontal' pad='large'>
                <Tabs>
                    <Tab title='Submit Recipe'>
                        <RecipeSubmissionPage />
                    </Tab>
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
