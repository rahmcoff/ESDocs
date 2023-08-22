/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [

    { type: 'doc', id: 'intro', },

    {
      type: 'category', label: 'Room Editor', items:
        [
          'room-editor/room-editor-handbook',
          'room-editor/custom-models',
          'room-editor/lua-scripting',
          {
            type: 'category', label: 'Logic Props', items:
              [
                'room-editor/logic_props/collider',
                'room-editor/logic_props/display',
                'room-editor/logic_props/empty',
                'room-editor/logic_props/finish',
                'room-editor/logic_props/fog',
                'room-editor/logic_props/light',
                'room-editor/logic_props/lock',
                'room-editor/logic_props/mirror',
                'room-editor/logic_props/obstacle',
                'room-editor/logic_props/open_link',
                'room-editor/logic_props/post_processing',
                'room-editor/logic_props/puzzle',
                'room-editor/logic_props/roulette',
                'room-editor/logic_props/slot',
                'room-editor/logic_props/sound',
                'room-editor/logic_props/spawn_point',
                'room-editor/logic_props/teleport',
                'room-editor/logic_props/trigger',
                'room-editor/logic_props/visibility_activator',
                'room-editor/logic_props/water',
              ],
            link: {
              type: 'generated-index',
              description: "Learn about all the Logic props"
            },
          },
          {
            type: 'category', label: 'Behaviours', items:
              [
              ],
            link: {
              type: 'generated-index',
              description: "Learn all about the Behaviours you can set on all props and how players interact with them."
            },
          }
        ],
      link: {
        type: 'generated-index',
        description: "One stop place for all information about features in Room Editor."
      },
    },
    {
      type: 'category', label: 'Room Editor - Videos', items:
        [
          'tutorial-videos/puzzle-prop',
          'tutorial-videos/roulette-prop',
          'tutorial-videos/room-editor-halloween-update',
          'tutorial-videos/room-editor-basics',
        ],
      link: {
        type: 'generated-index',
        description: "Room Editor information in video format!"
      },
    },
    {
      type: 'category', label: 'Stream VODs', items:
        [
          'stream-vods/versus-update-q-a',
          'stream-vods/build-a-room-3',
          'stream-vods/build-a-thon-22',
          'stream-vods/room-editor-two',
          'stream-vods/build-a-room-2-winners',
          'stream-vods/build-a-room-2-rooms',
          'stream-vods/build-a-room-1-winners'
        ],
      link: {
        type: 'generated-index',
        description: "Find old Pine streams here."
      },
    },

    { type: 'doc', id: 'patch-history', },
    { type: 'doc', id: 'faq/faq', },
    { type: 'doc', id: 'fun-stats', },
  ],
};

module.exports = sidebars;