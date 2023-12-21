---
layout: default
---


Before diving into the analysis of th cultural interests, it would be interesting to get a more global overview of our data. 

First of all, it would be interesting to be able to visualize the proportion of each subject for each language, using a stacked bar plot:
<include proportion plot>

When decomposing seasonally pageview patterns all topics combined, what strikes the most is that there are some weekly patterns in Wikipedia peageviews, for both mobile and desktop data:
<include plot step5> 
Over the whole period, except for Turkey and Italy, the global Wikipedia usage has remained steady


Let's study Wikepedia pageview statistics according to the device used, whether desktop or mobile. For each of the topics, the following plots summarize the general statisitics: 

<html>
Plese select a country to display the details :
<label for="registration_select_country"></label>
<select id="registration_selection_country" name="registration_country">
    <option value = "select country" selected="selected_country"> ---Select--- </option>
    <option value = "Sweden">Sweden</option>
    <option value = "Denmark">Denmark</option>
    <option value = "Italy">Italy</option>
    <option value = "Norway">Norway</option>
    <option value = "Germany">Germany</option>
    <option value = "Japan">Japan</option>
    <option value = "Netherlands">Netherlands</option>
    <option value = "Finland">Finland</option>
    <option value = "Catalonia">Catalonia</option>
    <option value = "Turkey">Turkey</option>
    <option value = "Weighted average">Weighted average</option>
</select>

<section id = "show_Sweden" style="display: none;">
<p>
<h3><b>Sweden</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Sweden_wiki.png" />
</p>
</p>
</section>



<section id = "show_Denmark" style="display: none;">
<p>
<h3><b>Denmark</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Denmark_wiki.png" />
</p>
</p>
</section>



<section id = "show_Italy" style="display: none;">
<p>
<h3><b>Italy</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Italy_wiki.png" />
</p>
</p>
</section>



<section id = "show_Norway" style="display: none;">
<p>
<h3><b>Norway</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Norway_wiki.png" />
</p>
</p>
</section>




<section id = "show_Germany" style="display: none;">
<p>
<h3><b>Germany</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Germany_wiki.png" />
</p>
</p>
</section>




<section id = "show_Japan" style="display: none;">
<p>
<h3><b>Japan</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Japan_wiki.png" />
</p>
</p>
</section>



<section id = "show_Netherlands" style="display: none;">
<p>
<h3><b>The Netherlands</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Netherlands_wiki.png" />
</p>
</p>
</section>



<section id = "show_Finland" style="display: none;">
<p>
<h3><b>Finland</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Finland_wiki.png" />
</p>
</p>
</section>



<section id = "show_Catalonia" style="display: none;">
<p>
<h3><b>Catalonia</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Catalonya_wiki.png" />
</p>
</p>
</section>



<section id = "show_Turkey" style="display: none;">
<p>
<h3><b>Turkey</b></h3>
<br>
<br>
<p align='center'>
<img src="images/Turkey_wiki.png" />
</p>
</p>
</section>
Here are the main conclusions we can draw from these plots:
- People tend to consult science, internet or engineering-related articles on their desktops.
STEM.STEM* or Culture.Internet culture are good representation of this. We can look at this difference more in depth and even assess whether the difference in pageview proportions between mobile and desktop is statistically significant by plotting boxplot and performing a Mann-Whitney U test
<include the boxplots for these subjects>
- People tend to consult culture-related articles on their mobiles (eg Culture.Food and drink, Culture.Media.Media* or Culture.Sports)
<include boxplots for these subjects>


The correlation between technological access and countries' culture needs to be further investigated. 

We will first cluster our countries in groups according to their ICT usage habits. To do so, a dataset from OECD.stat (https://stats.oecd.org/Index.aspx?DataSetCode=ICT_HH2) was used. It contains statistics about ICT Access and Usage by Individuals for each countries. For instance, the proportion of individuals who did submit forms to public authorities or the proportion of individuals who have transferred files. It gives a sense of the way citizens use ICT and Internet over all the countries. 
Data was clustered using Agglomerative Clustering and the optimal cluster number was chosen using Silhouette Score. To visualise the clusters, data was plotted in the plan of the 2 Principal Components. 3 main clusters were retrieved:

<include the image>

We then clustered countries in groups according to their Wikipedia pageview patterns. The proportion of pageviews for each topic was calculated by taking the median proportion of pageviews for a specific topic on a specific date. Using also Agglomerative Clustering and Silhouette Score for selecting clusters, we ended up with 3 clusters with similar pageview patterns:

<include the image>

Finally, we clustered countries in groups according to their Hofstede dimensions. Using the same clustering parameters as before, here are the 3 clusters isolated:

<include the image>

Denmark, The Netherlands, Sweden and Norway are always clustered together, suggesting that their ICT usage habits, Wikipedia pageview trends and Cultural Identity in the sense of Hofstede dimensions are all similar in a way. 
For the rest of the countries the potential correlation between ICT usage and cultural interests is less straightforward. 









```
The final element.
```