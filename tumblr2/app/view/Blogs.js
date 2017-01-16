Ext.define('Tumblr.view.Blogs', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox'
    ],
    xtype: 'blogsPanel',
    layout: {
        type: 'hbox',
    },
    items: [{
        width: 650,
        layout: {
            type: 'vbox'
        },
        items: [
        {
            xtype: 'form',
            defaultType: 'textfield',
            name: 'Blog Name:',
            itemId: 'idSearchBlogForm',
            width: 300,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            frame: true,
            padding: '10 10 10 10',
            items: [
                {
                    allowBlank: false,
                    fieldLabel: 'Blog Name:',
                    name: 'search_blog',
                    reference: 'search_blog',
                    emptyText: 'Search Tumblr Blog:'
                }, 
                {
                    fieldLabel: 'Tag:',
                    name: 'search_tag',
                    emptyText: 'Add tags',
                }
            ],
            buttons: [
                {    
                    text:'Submit',
                    handler: 'searchBlogs'
                }
            ]
        }, {
            xtype: 'gridpanel',
            store: {
                type: 'blogDataStore'
            },
            width: '100%',
            emptyText: 'Blog does not exist !!',
            selType: 'checkboxmodel',
            selModel: {
                checkOnly: true,
                mode: 'SIMPLE',
            },
            margin: '20 0 0 0',
            padding: '10 10 10 10',
            frame: true,
            columns: [
                {   
                    xtype: 'gridcolumn',
                    text: 'Blog Name',
                    locked: false,
                    dataIndex: 'blog_name',
                    // hideable: true,
                    itemId: 'idfilename',
                    tdCls: 'clickable',
                    renderer: function(value) {
                        // console.log('<a href="' + value + '.tumblr.com">' + value + '</a>');
                        return '<a href="http://' + value + '.tumblr.com" target="_blank" class="blog-name">' + value + '</a>';
                    }
                }, 
                {   
                    xtype: 'gridcolumn',
                    text: 'Link',
                    dataIndex: 'short_url',
                    maxWidth: 50,
                    renderer: function(value) {
                        return '<a href="' + value + '" target="_blank" class="fa fa-link"></a>';
                    }
                },
                {   
                    xtype: 'gridcolumn',
                    text: 'Title',
                    dataIndex: 'title',
                    minWidth: 120,
                    flex: 1
                },
                {   
                    xtype: 'gridcolumn',
                    text: 'Date',
                    locked: false,
                    dataIndex: 'date',
                    maxWidth: 150,
                    flex: 1,
                    type: Ext.data.Types.DATE,
                    renderer: Ext.util.Format.dateRenderer('d-M-y g:i A')
                },{
                    xtype: 'actioncolumn',
                    text: 'Add',
                    width: 70,
                    align: 'center',
                    itemId: 'idEditAction',
                    hideable: false,
                    sortable: false,
                    menuDisabled: true,
                    items: [{
                        iconCls: 'fa-home',
                        tooltip: 'Add to Favorites',
                        xtype: 'button',
                        itemId: 'addBlog',
                        stopSelection: true,
                        handler: function(view, cell, rowIndex, colIndex, e, record, row) {
                        
                        },
                    }],
                }
            ]
        }]
    }, {
        xtype: 'panel',
        title: 'Favorites',
        width: 300,
        margin: '0 0 0 20',
        html: [
            '<div>Currently I only have the Tumblr Search API working.</div>' +
            '<div>I don\'t have the Add to Favorites Feature working</div>' + 
            '<div>I don\'t have the Search the Blog by Tags working</div>'
        ]
    }],

    controller: 'blogController',

    listeners: {
        select: 'onItemSelected'
    }
});