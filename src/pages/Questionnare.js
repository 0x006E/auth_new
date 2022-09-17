import React from "react";
import { Link } from "react-router-dom";
import firebase from "../assets/images/firebase.png";
import flutter from "../assets/images/flutter.png";
import nodejs from "../assets/images/nodejs.png";
import python from "../assets/images/python.png";
import tensorflow from "../assets/images/tensorflow.png";
import "../qs.css";
export default function Questionnare(props) {
  return (
    <div class="course-main">
      <h4>Hello {props.name} 👋</h4>
      <h2>Select the topics that you wish to learn</h2>
      <div class="grid">
        <label class="card ">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img class="card__body-cover-image " src={python} />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Python</h2>
              <p class="card__body-header-subtitle">Motorcycles</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img class="card__body-cover-image" src={flutter} />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Flutter</h2>
              <p class="card__body-header-subtitle">Cars and ATVs</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img class="card__body-cover-image" src={firebase} />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Firebase</h2>
              <p class="card__body-header-subtitle">Large goods vehicle</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img class="card__body-cover-image" src={nodejs} />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Node JS</h2>
              <p class="card__body-header-subtitle">Buses</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <img class="card__body-cover-image" src={tensorflow} />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Tensor Flow</h2>
              <p class="card__body-header-subtitle">Tractors and SMV</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" disabled="disabled" />
          <div class="card__body">
            <div class="card__body-cover">
              <img
                class="card__body-cover-image"
                src="https://i.ibb.co/WDwmPy5/other.png"
              />
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Other</h2>
              <p class="card__body-header-subtitle">Additional categories</p>
            </header>
          </div>
        </label>
      </div>

      <br />
      <h2>Select your level</h2>
      <div class="grid">
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Beginner</h2>
              <p class="card__body-header-subtitle">Motorcycles</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Intermediate</h2>
              <p class="card__body-header-subtitle">Cars and ATVs</p>
            </header>
          </div>
        </label>
        <label class="card">
          <input class="card__input" type="checkbox" />
          <div class="card__body">
            <div class="card__body-cover">
              <span class="card__body-cover-checkbox">
                <svg class="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
            </div>
            <header class="card__body-header">
              <h2 class="card__body-header-title">Advanced</h2>
              <p class="card__body-header-subtitle">Large goods vehicle</p>
            </header>
          </div>
        </label>
      </div>
      <br />
      <br />
      <Link to="/dashboard" className="button-next">
        Next
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
