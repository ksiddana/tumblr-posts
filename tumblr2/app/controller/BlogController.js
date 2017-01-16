Ext.define('Tumblr.controller.BlogController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Tumblr.view.Blogs'
    ],

    alias: 'controller.blogController',

    searchBlogs: function() {

        var view = this.getView(),
            references = view.getReferences(),
            searchBlogRef = references.search_blog;

        console.log('Input Field: ', searchBlogRef.getValue());

        
        var blogDataStore = Ext.data.StoreManager.lookup('blogData');

        var requestParams = {};
            requestParams.blog_name = searchBlogRef.getValue();

        var spareData = blogDataStore.load({
            params: requestParams
        });            

        console.log("New Data: ", spareData);

    }

});