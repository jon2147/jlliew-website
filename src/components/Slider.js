import React from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

var flkty;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flickityReady: false,
        }

        this.refreshFlickity = this.refreshFlickity.bind(this);
    }

    componentDidMount() {
        flkty = new Flickity(this.flickityNode, this.props.options || {});


        this.setDirectionNav();

        this.setState({
            flickityReady: true,
        });

    }

    refreshFlickity() {
        flkty.select(0);

        flkty.reloadCells();
        flkty.resize();
        flkty.updateDraggable();
        this.setPositionNav();
    }

    componentWillUnmount() {
        flkty.destroy();
    }

    componentDidUpdate(prevProps, prevState) {
        const flickityDidBecomeActive = !prevState.flickityReady && this.state.flickityReady;
        const childrenDidChange = prevProps.children.length !== this.props.children.length;

        if (flickityDidBecomeActive || childrenDidChange) {
            this.refreshFlickity();
        }
    }

    setDirectionNav() {
        /* Carousel direction button navigation */

        var directionButtonBack = document.querySelector('.carousel-nav-direction');
        directionButtonBack.addEventListener('click', function () {
            flkty.previous();
        });

        var directionButtonForward = document.querySelector('.carousel-nav-direction.forward');
        directionButtonForward.addEventListener('click', function () {
            flkty.next();
        });
    }

    setPositionNav() {
        /* Carousel dot position navigation */

        var positionDotGroup = document.querySelector('.carousel-nav-position');
        var positionDots = positionDotGroup.querySelectorAll('.carousel-nav-position-dot');

        flkty.on('select', function () {
            var lastPositionDot = positionDotGroup.querySelector('.selected');
            var currentPositionDot = positionDotGroup.children[flkty.selectedIndex];
            if (lastPositionDot) lastPositionDot.classList.remove('selected');
            if (currentPositionDot) currentPositionDot.classList.add('selected');
        });

        positionDots.forEach(function (dot, index) {
            dot.addEventListener('click', function (event) {
                flkty.select(index);
            })
        })

    }

    renderPortal() {
        if (!this.flickityNode) {
            return null;
        }

        const mountNode = this.flickityNode.querySelector('.flickity-slider');

        if (mountNode) {
            return ReactDOM.createPortal(this.props.children, mountNode);
        }
    }

    render() {
        return [
            <div className="carousel"
                key="flickityBase"
                ref={node => (this.flickityNode = node)} />,
            this.renderPortal(),
        ].filter(Boolean);
    }

}
