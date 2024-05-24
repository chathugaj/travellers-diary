import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import BlogPosts from "../pages/BlogPosts";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BlogPosts">
                <BlogPosts/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews