xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput3")
                .setLeft("25.833333333333332em")
                .setTop("1.6666666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("日期输入框")
                .setType("date"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4")
                .setLeft("25.833333333333332em")
                .setTop("4.166666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("下拉列表框")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ]),
                "main"
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar2")
                .setItems([
                    {
                        "id":"menu1",
                        "sub":[
                            {
                                "id":"normal",
                                "caption":"normal"
                            },
                            {
                                "id":"disabled",
                                "caption":"disabled",
                                "disabled":true
                            },
                            {
                                "id":"image",
                                "caption":"image",
                                "imageClass":"xui-icon-xui"
                            },
                            {
                                "type":"split"
                            },
                            {
                                "id":"checkbox 1",
                                "caption":"checkbox 1",
                                "type":"checkbox"
                            },
                            {
                                "id":"checkbox 2",
                                "caption":"checkbox 2",
                                "type":"checkbox"
                            }
                        ],
                        "caption":"menu1"
                    },
                    {
                        "id":"menu2",
                        "sub":[
                            {
                                "id":"sub menu 1",
                                "caption":"sub menu 1",
                                "add":"[Ctrl+F]",
                                "sub":[
                                    {
                                        "id":"sub 1",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 2",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 3"
                                    }
                                ]
                            },
                            {
                                "id":"sub menu 2",
                                "caption":"sub menu 2",
                                "add":"[Ctrl+T]",
                                "sub":[
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption":"menu2"
                    }
                ])
                .setTop("2.5em"),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});