import {Request, Response} from "express"
import Pokemon from "../models/Pokemon"

export default {
    async index(request: Request, response: Response) {
        try {
            const page: string = request.params.page as string
            const pokemons = await Pokemon.find().skip(50 * parseInt(page)).limit(50);
            return response.status(200).json({pokemons: pokemons});
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    },

    async add(request: Request, response: Response) {
        const {name, base_experience, game_indices, height, is_default} = request.body;
        
        let pokemon = await Pokemon.findOne({name: name})
        
        if(pokemon) return response.status(401).send("Pokemon already exists")

        try {
            const pokemon_created = await Pokemon.create({
                name, base_experience, game_indices, height, is_default});
            response.status(201).json(pokemon_created);
        }
        catch(error) {
            return response.status(500).json({error: error.message});
        }   

    },

    async delete(request: Request, response: Response) {
        const {name} = request.params;
        
        let pokemon = await Pokemon.findOne({name})
        
        if(!pokemon) return response.status(401).send("Pokemon not exists")

        try {
            await Pokemon.deleteOne({name});
            return response.status(200).send('Ok');
        }
        catch(error) {
            return response.status(500).json({error: error.message});
        }   

    },

    async update(request: Request, response: Response) {
        const {name} = request.params;
        const { base_experience, game_indices, height, is_default} = request.body;
        
        let pokemon = await Pokemon.findOne({name})
        
        if(!pokemon) return response.status(401).send("Pokemon not exists")

        try {
            await Pokemon.updateOne({name}, {base_experience, game_indices, height, is_default});
            const pokemon_m = await Pokemon.findOne({name})
            return response.status(200).json(pokemon_m);
        }
        catch(error) {
            return response.status(500).json({error: error.message});
        }   

    },
};