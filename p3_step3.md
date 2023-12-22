---
layout: default
---

## Introduction
This step aimed to explore cultural shifts during the COVID-19 pandemic by analyzing Wikipedia pageview data across different topics and correlating them with Hofstede's cultural dimensions scores for various countries. The analysis was divided into several phases to understand changes in interests and potential cultural shifts pre and during the pandemic.

## Methodology
### Data Collection and Preprocessing

- Retrieved Wikipedia pageview data for multiple topics across countries.
- Segmented data into pre-COVID and during-COVID periods.
- Calculated proportions of pageviews for each topic, representing countries' 'interest' in specific subjects.

### Statistical Analysis
- Conducted t-tests to compare pre-COVID and during-COVID proportions for each topic, identifying significant shifts in interests over time.

### Correlation Analysis
- Calculated correlations between median pre-COVID pageview proportions and Hofstede's cultural dimensions scores across topics.
- Identified relationships between specific topics and cultural dimensions.

### Machine Learning Approach
- Utilized a random forest regression model.
- Trained the model with pre-COVID median proportions data.
- Predicted Hofstede's cultural dimensions scores from during-COVID median proportions, hypothesizing cultural changes during the pandemic.

# Results
### T-test Analysis
- Most topics exhibited significant changes in interest levels between pre-COVID and during-COVID periods, as determined by t-tests.
<p id='idv_corr' align='center' style="display: block;" >
<img src="images/hofstede/t_test.png" alt="t_test"/>
</p>
Out of the 492 different combinations of language and topic, there were only about 100 which had a p-value of greater than 0.05, indicating that in general there is a statistically significant difference between the pageviews pre-covid and during-covid.


### Correlation Analysis Between Topics and Cultural Dimensions
- Strong correlations were found between specific topics and certain cultural dimensions, providing insights into how wikipedia pageviews can reveal information about culture.
<label for="map_select"></label>
<select id="correlation_selection">
    <option value = "idv_corr" selected="selected">Individualism vs Collectivism</option>
    <option value = "ivr_corr">Indulgence vs Restraint</option>
    <option value = "ltowvs_corr">Long Term vs Short Term Orientation</option>
    <option value = "mas_corr">Masculinity vs Femininity</option>
    <option value = "pdi_corr">Power Distance Index</option>
    <option value = "uai_corr">Uncertainty Avoidance Index</option>
</select>

<p id='idv_corr' align='center' style="display: block;" >
<img src="images/hofstede/idv_correlation.png" alt="idv_correlation"/>
</p>

<p id='ivr_corr' align='center' style="display: none;" >
<img src="images/hofstede/ivr_correlation.png" alt="ivr_correlation"/>
</p>

<p id='ltowvs_corr' align='center' style="display: none;" >
<img src="images/hofstede/ltowvs_correlation.png" alt="ltowvs_correlation"/>
</p>

<p id='mas_corr' align='center' style="display: none;" >
<img src="images/hofstede/mas_correlation.png" alt="mas_correlation"/>
</p>

<p id='uai_corr' align='center' style="display: none;" >
<img src="images/hofstede/uai_correlation.png" alt="uai_correlation"/>
</p>

### Machine Learning Predictions
- The Random Forest regression model predicted potential changes in Hofstede's cultural dimensions scores during the COVID-19 period based on shifts in interests indicated by Wikipedia pageviews.

<label for="map_select"></label>
<select id="covid_selection">
    <option value="idv_covid" selected="selected">Individualism vs Collectivism</option>
    <option value="ivr_covid">Indulgence vs Restraint</option>
    <option value="ltowvs_covid">Long Term vs Short Term Orientation</option>
    <option value="mas_covid">Masculinity vs Femininity</option>
    <option value="pdi_covid">Power Distance Index</option>
    <option value="uai_covid">Uncertainty Avoidance Index</option>
</select>

<p id='idv_covid' align='center' style="display: block;">
    <img src="images/hofstede/idv_covid.png" alt="idv_covid" />
</p>

<p id='ivr_covid' align='center' style="display: none;">
    <img src="images/hofstede/ivr_covid.png" alt="ivr_covid" />
</p>

<p id='ltowvs_covid' align='center' style="display: none;">
    <img src="images/hofstede/ltowvs_covid.png" alt="ltowvs_covid" />
</p>

<p id='mas_covid' align='center' style="display: none;">
    <img src="images/hofstede/mas_covid.png" alt="mas_covid" />
</p>

<p id='uai_covid' align='center' style="display: none;">
    <img src="images/hofstede/uai_covid.png" alt="uai_covid" />
</p>
