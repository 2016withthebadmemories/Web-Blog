using System;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApiApp.Models
{
    public class PagenatedList<T> : List<T>
    {
        public int PageIndex { get; set; }
        public int TotalPage { get; set; }
        public PagenatedList(List<T> items, int count, int pageIndex, int pageSize)
        {
            PageIndex = pageIndex;
            TotalPage = (int)Math.Ceiling(count / (double)pageIndex);

            AddRange(items);
        }
        public static PagenatedList<T> Create(IQueryable<T> source, int pageIndex, int PageSize)
        {
            var count = source.Count();
            var items = source.Skip((pageIndex - 1)* PageSize).Take(PageSize).ToList();

            return new PagenatedList<T>(items, count, pageIndex, PageSize);
        }
    }
}
