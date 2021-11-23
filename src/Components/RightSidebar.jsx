function RightSidebar(){
    return(
    <div className="right-bar">
    <div data-simplebar="init" className="h-100">
        <div className="simplebar-wrapper" style={{margin: "0px"}}>
            <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
                <div className="simplebar-offset" style={{right: "0px", bottom: "0px"}}>
                    <div className="simplebar-content-wrapper" style={{height: "100%", overflow: "hidden scroll"}}>
                        <div className="simplebar-content" style={{padding: "0px"}}>
                            
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs nav-bordered nav-justified" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link py-2" data-toggle="tab" href="#chat-tab" role="tab">
                                        <i className="mdi mdi-message-text d-block font-22 my-1"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-2" data-toggle="tab" href="#tasks-tab" role="tab">
                                        <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-2 active" data-toggle="tab" href="#settings-tab" role="tab">
                                        <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                                    </a>
                                </li>
                            </ul>
                            
                            {/* Tab panes */}
                            <div className="tab-content pt-0">
                                <div className="tab-pane active" id="settings-tab" role="tabpanel">
                                    <h6 className="font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
                                        <span className="d-block py-1">Theme Settings</span>
                                    </h6>
                                    
                                    <div className="p-3">
                                        <div className="alert alert-warning" role="alert">
                                            <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                                        </div>
                                        
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="color-scheme-mode"
                                            value="light" id="light-mode-check" checked=""/>
                                            <label className="custom-control-label" for="light-mode-check">Light
                                            Mode</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="color-scheme-mode"
                                            value="dark" id="dark-mode-check"/>
                                            <label className="custom-control-label" for="dark-mode-check">Dark Mode</label>
                                        </div>
                                        
                                        {/* Width */}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Width</h6>
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="width" value="fluid"
                                            id="fluid-check" checked=""/>
                                            <label className="custom-control-label" for="fluid-check">Fluid</label>
                                        </div>
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="width" value="boxed"
                                            id="boxed-check"/>
                                            <label className="custom-control-label" for="boxed-check">Boxed</label>
                                        </div>
                                        
                                        {/* Menu positions */}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Menus (Leftsidebar and
                                        Topbar) Positon</h6>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="menus-position"
                                            value="fixed" id="fixed-check" checked=""/>
                                            <label className="custom-control-label" for="fixed-check">Fixed</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="menus-position"
                                            value="scrollable" id="scrollable-check"/>
                                            <label className="custom-control-label"
                                            for="scrollable-check">Scrollable</label>
                                        </div>
                                        
                                        {/* Left Sidebar*/}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Color</h6>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-color"
                                            value="light" id="light-check" checked=""/>
                                            <label className="custom-control-label" for="light-check">Light</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-color"
                                            value="dark" id="dark-check"/>
                                            <label className="custom-control-label" for="dark-check">Dark</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-color"
                                            value="brand" id="brand-check"/>
                                            <label className="custom-control-label" for="brand-check">Brand</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-3">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-color"
                                            value="gradient" id="gradient-check"/>
                                            <label className="custom-control-label" for="gradient-check">Gradient</label>
                                        </div>
                                        
                                        {/* size */}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Size</h6>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-size"
                                            value="default" id="default-size-check" checked=""/>
                                            <label className="custom-control-label" for="default-size-check">Default</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-size"
                                            value="condensed" id="condensed-check"/>
                                            <label className="custom-control-label" for="condensed-check">Condensed
                                            <small>(Extra Small size)</small></label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="leftsidebar-size"
                                            value="compact" id="compact-check"/>
                                            <label className="custom-control-label" for="compact-check">Compact
                                            <small>(Small size)</small></label>
                                        </div>
                                        
                                        {/* User info */}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Sidebar User Info</h6>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="checkbox" className="custom-control-input" name="leftsidebar-user"
                                            value="fixed" id="sidebaruser-check"/>
                                            <label className="custom-control-label" for="sidebaruser-check">Enable</label>
                                        </div>
                                        
                                        
                                        {/* Topbar */}
                                        <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="topbar-color"
                                            value="dark" id="darktopbar-check" checked=""/>
                                            <label className="custom-control-label" for="darktopbar-check">Dark</label>
                                        </div>
                                        
                                        <div className="custom-control custom-switch mb-1">
                                            <input type="radio" className="custom-control-input" name="topbar-color"
                                            value="light" id="lighttopbar-check"/>
                                            <label className="custom-control-label" for="lighttopbar-check">Light</label>
                                        </div>
                                        
                                        
                                        <button className="btn btn-primary btn-block mt-4" id="resetBtn">Reset to
                                        Default</button>
                                        
                                        <a href="#" className="btn btn-danger btn-block mt-3" target="_blank"><i
                                        className="mdi mdi-basket mr-1"></i> Upgrade Now</a>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="simplebar-placeholder" style={{width: "auto", height: "1285px"}}></div>
        </div>
        <div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}>
            <div className="simplebar-scrollbar" style={{width: "0px", display: "none"}}></div>
        </div>
        <div className="simplebar-track simplebar-vertical" style={{visibility: "visible"}}>
            <div className="simplebar-scrollbar" style={{height: "41px", transform: "translate3d(0px, 0px, 0px)", display: "block"}}></div>
        </div>
    </div> 
    {/* end slimscroll-menu*/}
</div>        
);
}

export default RightSidebar;