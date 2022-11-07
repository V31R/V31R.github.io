import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class BetaDistribution(DistributionTemplate):
    def __init__(self):
        super(BetaDistribution, self).__init__('Бета распределение')

    def calculate(self, data: pd.Series) -> None:
        a, b = 2.31, 0.627
        self.distribution = np.linspace(stats.beta.ppf(0.01, a, b) * data.min(), stats.beta.ppf(0.99, a, b) * data.max(), len(data))
        self.__mse__(data)