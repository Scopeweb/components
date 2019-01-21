import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div className="uk-width-1-4@l">
                <aside className="pr-sidebar widget-area" id="site-sidebar">
                    <div style={{zIndex: 1}} data-uk-sticky="offset: 120; bottom: true" className="uk-sticky">
                        <section className="widget widget_nav_menu">
                        <h2 className="widget-title">Our Process</h2>
                        <ul className="content">
                            <li className="current"><a href="#">1. Analyze</a></li>
                            <li><a href="#">2. Design</a></li>
                            <li><a href="#">3. Develop</a></li>
                        </ul>
                        </section>
                    </div>
                    <div className="uk-sticky-placeholder" style={{height: 513, margin: 0}} hidden />
                </aside>
            </div>
        );
    }
}

export default SideBar;