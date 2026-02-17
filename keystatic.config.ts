import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Scripts', value: 'scripts' },
                        { label: 'Sketchbook', value: 'sketchbook' },
                        { label: 'Coding', value: 'coding' },
                        { label: 'Fiber', value: 'fiber' },
                    ],
                    defaultValue: 'coding',
                }),
                heroImage: fields.image({
                    label: 'Hero Image',
                    directory: 'public/images/projects',
                    publicPath: '/images/projects/',
                }),
                link: fields.text({ label: 'Link (Optional)' }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: props => props.value,
                }),
                gallery: fields.array(
                    fields.conditional(
                        fields.select({
                            label: 'Type',
                            options: [
                                { label: 'Image', value: 'image' },
                                { label: 'Video', value: 'video' },
                            ],
                            defaultValue: 'image',
                        }),
                        {
                            image: fields.image({
                                label: 'Image',
                                directory: 'public/images/projects/gallery',
                                publicPath: '/images/projects/gallery/',
                            }),
                            video: fields.object({
                                url: fields.text({ label: 'Video URL (Streaming)' }),
                                caption: fields.text({ label: 'Caption' }),
                            }),
                        }
                    ),
                    {
                        label: 'Media Gallery',
                        itemLabel: props =>
                            props.discriminant === 'image' ? 'Image' : 'Video',
                    }
                ),
                content: fields.document({
                    label: 'Project Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/projects/content',
                        publicPath: '/images/projects/content/',
                    },
                }),
            },
        }),
    },
});
