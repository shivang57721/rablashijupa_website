# Impact of COVID-19 on Wikipedia Pageviews: A Comparative Analysis"

In order to evaluate how much covid affected people’s interest, it is necessary to compare data before and during the pandemic. We therefore take the assumption that school closure's date for each country represents the beginning of the pandemic and consequently the lockdown. 

<p align='center'>
<img src="images/pre_post_covid/timeline.png" />
</p>

 <br>

# Changes in Wikipedia Subtopic Interest During COVID-19 

Our first plot shows that there were more pageviews on Wikipedia during the pandemic, in most countries. This makes sense as people were mostly at home and on their computers. The only countries that registered less pageviews during the pandemic are the three scandinavian countries : Denmark, Norway and Sweden. These three countries had short lockdown, which could explain why they didn't register a growth in Wikipedia pageviews as people spent more time outside when the lockdown ended. Moreover, we can notice that the proportion of pageviews is bigger than 1, this is due to the fact that wikipedia pages can be linked with multiple topics.

<p align='center'>
<img src="images/pre_post_covid/total_growth.png" />
</p>

 <br>

Although, there were no noticeable differences in the topics pre and post-covid, some subtopics had noticeable changes. Indeed, as shows our plot some subtopics wikipedia pages were much more visited during covid and inversely. STEM.Biology is a good example of this interest growth. In every country we studied, this subtopic had roughly a 20 % interest increase (taking into account that more people visited wikipedia pages during Covid). This makes sense as Covid is intricately linked with biology, thus covid raised interest in biology. A subtopic that we noticed received an interest decrease is Culture.Sports. Indeed, its interest decreased roughly by 20 % in every country. Again, this makes sense as most people were at home and didn’t have the opportunity to practice sport, thus it decreased their interest in sports during that period. In the following plot, we can see which subtopics received more attention and the ones that received less attention. AAAAAAA

<p align='center'>
<img src="images/pre_post_covid/Proportion_of_pagviews_bef_after.png" />
</p>

 <br>

I want to see the increase for the following topic : <label for="map_select"></label>
<select id="increase_selection" name="registration">
    <option value = "select_region" selected="selected"> ---Select--- </option>
    <option value = "map1">Biology</option>
    <option value = "map2">Books</option>
    <option value = "map3">Video games</option>
    <option value = "map4">Internet Culture</option>
    <option value = "map5">Government and Politics</option>
</select>

<p id='biology' align='center' style="display: none;" >
<img src="images/pre_post_covid/STEMbiology.png" alt="map_asia"/>
</p>

<p id='books' align='center' style="display: none;" >
<img src="images/pre_post_covid/Books.png" alt="map_europe"/>
</p>

<p id='videogames' align='center' style="display: none;" >
<img src="images/pre_post_covid/Videogames.png" alt="map_asia"/>
</p>

<p id='internetculture' align='center' style="display: none;" >
<img src="images/pre_post_covid/Internetculture.png" alt="map_asia"/>
</p>

<p id='histandgov' align='center' style="display: none;" >
<img src="images/pre_post_covid/Historyandgov.png" alt="map_asia"/>
</p>

<br>


I want to see the decrease for the following topic : <label for="map_select"></label>
<select id="decrease_selection" name="registration">
    <option value = "select_region" selected="selected"> ---Select--- </option>
    <option value = "mp1">Sports</option>
    <option value = "mp2">Education</option>
    <option value = "mp3">Engineering</option>
    <option value = "mp4">Fashion</option>
</select>

<p id='sports' align='center' style="display: none;" >
<img src="images/pre_post_covid/Sport.png" alt="map_asia"/>
</p>

<p id='education' align='center' style="display: none;" >
<img src="images/pre_post_covid/Education.png" alt="map_europe"/>
</p>

<p id='engineering' align='center' style="display: none;" >
<img src="images/pre_post_covid/Engineering.png" alt="map_asia"/>
</p>

<p id='fashion' align='center' style="display: none;" >
<img src="images/pre_post_covid/Fashion.png" alt="map_asia"/>
</p>

<br>

<script src='javascript.js'></script>









# Distinct Online Behavior of South Korea During the Pandemic

While doing our analysis, we noticed that South Korea tends to stand aside in certain subtopics. In contrast to other countries,  South Korea shows less interest for “Entertainment”, “Films” and “Media” during the pandemic  according to our analysis. Taking into account that South Korea didn’t have much of an “imposed” lockdown, it would make sense that the population tried to focus as much as possible on their work during what was an “uncertain time”, thus it would explain their interest deccrease in these categories.
While all other countries perceived an increase in these categories, as they seeked for entertainment during the pandemic and the lockdown.

PLOT OF KOREA


# Consistency in Country Clusters Based on Browsing Patterns Pre and Post-COVID

We also implemented clusters based on the country browsing patterns pre and post-covid. We noticed that the clusters of countries remained the same in the two periods. Although some countries' interest changed during covid, it tended to change in the same direction as the cluster it belonged to. This explains why the clusters remain the same.

PLOT OF CLUSTERS PRE/POST COVID FOR EVERY CULTURAL ASPECT
