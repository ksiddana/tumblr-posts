Ext.define('Tumblr.store.BlogData', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.Request', 
    ],
    alias: 'store.blogDataStore',
    storeId: 'blogData',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: '/bloginfo',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    
    data: [
        {
            "id": 642,
            "created_by": "Marion Williams",
            "blog_name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            //"date": "8/23/2015",
            //"time": "8:45 PM",
            //"timeElapsed": "30 Min",
            "date": "2015/08/23",
            "time": "20:45:00",
            "userId": 6,
            "notificationType": "comment"
        },
        {
            "id": 351,
            "created_by": "Nora Watson",
            "blog_name": "Lorem ipsum dolor sit amet.",
            "date": "2015/08/23",
            "time": "19:15:00",
            "userId": 7,
            "notificationType": "comment"
        }
    ]
});

Ext.create('Tumblr.store.BlogData');
