class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {  
        //choose the smaller and larger arrays
        vector<int> shorter;
        vector<int> longer;
        
        if (nums1.size() > nums2.size())
             {shorter = nums2; longer = nums1;}
        else {shorter = nums1; longer = nums2;}
        
        int nShort = shorter.size();
        int nLong  =  longer.size();
        
        //case of one of the arrays being empty
        if ( nShort == 0 ) {
            return (nLong%2==1) ?  longer[nLong/2] 
                                :((longer[nLong/2] + longer[nLong/2 - 1]) / 2.0) ;
        }
        
        //initial position of pointers in the middle
        int  longDiv =  nLong/2;
        int shortDiv = (nLong + nShort + 1)/2 - longDiv;
        int stepSize = (nShort/2 > 1) ? nShort/2 : 1;
        
        int found = 0;
        
        //move laterally until we split the two arrays into smaller and larger
        int longSmall, longBig, shortSmall, shortBig;
        
        while(!found) {
            shortSmall  = (shortDiv > 0)     ? shorter[shortDiv-1] : INT_MIN;
            shortBig    = (shortDiv < nShort)? shorter[shortDiv]   : INT_MAX;
            longSmall   = (longDiv > 0)      ? longer[longDiv-1]   : shortSmall;
            longBig     = (longDiv < nLong)  ? longer[longDiv]     : shortBig;
            
            if ( longSmall <= shortBig && shortSmall <= longBig)
                found = 1;    
            else {
                stepSize = (stepSize>1) ? stepSize/2 : 1;
                
                if (longSmall > shortBig) {
                     longDiv -= stepSize;
                    shortDiv += stepSize;
                }
                
                else {
                     longDiv += stepSize;
                    shortDiv -= stepSize;
                } 
            }     
        }
        
        //median numbers
        int a, b;
        
        a = min( longBig  , shortBig);
        b = max( longSmall, shortSmall);
        
        //return the median depending if numer of items is even or odd
        if ((nLong + nShort) % 2 == 1) 
             return  min(a,b);
        else return ( (a+b)/2.0 );
    }
};
