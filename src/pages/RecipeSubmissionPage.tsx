import React, { useState } from 'react';
import { RecipeSubmissionForm } from '../components/RecipeSubmissionForm';
import { RecipeType } from '../types/RecipeType';
import { RecipeView } from '../components/RecipeView';

export function RecipeSubmissionPage() {
    const [newRecipe, setNewRecipe] = useState<RecipeType | undefined>(undefined);
    return (
        <>
            {newRecipe === undefined ? (
                <RecipeSubmissionForm onSubmit={(recipe) => setNewRecipe(recipe)} />
            ) : (
                <RecipeView recipe={newRecipe} />
            )}
        </>
    );
}
