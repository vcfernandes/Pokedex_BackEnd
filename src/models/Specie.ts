import mongoose, { Model } from "mongoose"

const specieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    url: {
        type: String,
        default: false,
    }
});

const Especie = mongoose.model("especies", specieSchema);
export default Especie;
